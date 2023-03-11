const { request, response } = require('express');
const db = require('../models');
const transaksiModel = db.Transaksi;
const izinModel = db.Izin;
const siswaModel = db.Siswa;
const kelasModel = db.Kelas;
const jurusanModel = db.Jurusan

class Guru {
    async permintaanIzin(req = request, res = response) {
        const guruNip = req.kredensial;
        try {
            const izins = await transaksiModel.findAll({
                attributes: ['id', 'izinId', 'izin_guru', 'izin_petugas','catatan_guru', 'catatan_petugas'],
                where: { guruNip: guruNip, izin_guru: 'Proses'},
                include: [{
                    as: 'transaksiIzin',
                    model: izinModel,
                    attributes: [
                        'id', 'siswaNis', 'mapel', 'alasan', 'waktu_izin', 'waktu_kembali', 'tggl'
                    ],
                    include: [{
                        as: 'izinSiswa',
                        model: siswaModel,
                        attributes: ['nama', 'kelasId'],
                        include: [{
                            as: 'siswaKelas',
                            model: kelasModel,
                            attributes: ['kelas', 'jurusanId', 'rombel'],
                            include: [{
                                as: 'kelasJurusan',
                                model: jurusanModel,
                                attributes: ['jurusan']
                            }]
                        }]
                    }],
                }]
            });

            if(izins.length < 1) return res.json([{status: 'tidak ada', message: 'Tidak ada izin yang perlu disetujui'}])

            res.json(izins);
        } catch (err) {
            console.log(err);
        }
    }

    async persetujuanIzin(req = request, res = response) {
        const { kredensial } = req;
        const { status, idTrans } = req.body;

        try {
            await transaksiModel.update({ guruNip: kredensial, izin_guru: status }, {
                where: {
                    id: idTrans
                }
            });

            res.json({message: 'Izin telah dikonfirmasi guru'});
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }
}

module.exports = Guru;