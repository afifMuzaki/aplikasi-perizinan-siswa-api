const { request, response } = require('express');
const { Op } = require('sequelize');
const db = require('../models');
const transaksiModel = db.Transaksi;
const izinModel = db.Izin;
const siswaModel = db.Siswa;
const kelasModel = db.Kelas;
const jurusanModel = db.Jurusan;
const guruModel = db.Guru;
const petugasModel = db.Petugas;

class Petugas {
    async permintaanIzin(req = request, res = response) {
        try {
            const izins = await transaksiModel.findAll({
                attributes: ['id', 'izinId', 'izin_guru', 'izin_petugas', 'catatan_guru', 'catatan_petugas'],
                where: {
                    petugasNip: null, izin_petugas: 'Proses', izin_guru: {
                        [Op.or]: ['Disetujui', 'Ditolak']
                    }
                },
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
                }
                ]
            });

            if (izins.length < 1) return res.json([{ status: 'tidak ada', message: 'Tidak ada izin yang perlu disetujui!' }]);

            res.json(izins);
        } catch (err) {
            console.log(err);
        }
    }

    async persetujuanIzin(req = request, res = response) {
        const { kredensial } = req;
        const { status, idTrans, catatan } = req.body;

        try {
            await transaksiModel.update({ petugasNip: kredensial, izin_petugas: status, catatan_petugas: catatan }, {
                where: {
                    id: idTrans
                }
            });

            res.json({ message: 'Izin telah dikonfirmasi petugas' });
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }

    async riwayatIzin(req = request, res = response) {
        const petugasNip = req.kredensial;
        try {
            const riwayatIzins = await transaksiModel.findAll({
                attributes: ['id', 'izinId', 'izin_guru', 'izin_petugas', 'catatan_guru', 'catatan_petugas'],
                where: {
                    petugasNip: petugasNip
                },
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
                }, {
                    as: 'transaksiGuru',
                    model: guruModel,
                    attributes: ['nama']
                }, {
                    as: 'transaksiPetugas',
                    model: petugasModel,
                    attributes: ['nama']
                }
                ]
            });

            res.json(riwayatIzins);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Petugas;