const { request, response } = require("express");
const { sequelize } = require("../models");
const db = require("../models");
const izinModel = db.Izin;
const transaksiModel = db.Transaksi;
const guruModel = db.Guru;
const petugasModel = db.Petugas;
const siswaModel = db.Siswa;
const kelasModel = db.Kelas;
const jurusanModel = db.Jurusan;

class Siswa {
    async entriIzin(req = request, res = response) {
        const { kredensial } = req;

        const { nipGuru, idKategori, pelajaran, alasanIzin, waktuIzin, waktuKembali } = req.body;

        try {
            await izinModel.create({
                siswaNis: kredensial,
                guruNip: nipGuru,
                kategoriId: idKategori,
                mapel: pelajaran,
                alasan: alasanIzin,
                waktu_izin: waktuIzin,
                waktu_kembali: waktuKembali,
            });

            res.send('Izin sedang diajukan, silahkan tunggu persetujuan');
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }

    async riwayatIzin(req = request, res = response) {
        const { kredensial } = req;

        try {
            const izins = await izinModel.findAll({
                attributes: ['id', 'mapel', 'alasan', 'waktu_izin', 'waktu_kembali', 'tggl'],
                where: {
                    siswaNis: kredensial,
                },
                include: [
                    {
                        as: 'izinTransaksi',
                        model: transaksiModel,
                        attributes: ['guruNip', 'petugasNip', 'izin_guru', 'izin_petugas', 'catatan_guru', 'catatan_petugas'],
                        include: [
                            {
                                as: 'transaksiGuru',
                                model: guruModel,
                                attributes: ['nama']
                            },
                            {
                                as: 'transaksiPetugas',
                                model: petugasModel,
                                attributes: ['nama']
                            },
                        ]
                    },
                    {
                        as: 'izinSiswa',
                        model: siswaModel,
                        attributes: ['nama', 'nis'],
                        include: [{
                            as: 'siswaKelas',
                            model: kelasModel,
                            attributes: ['kelas', 'rombel'],
                            include: [{
                                as: 'kelasJurusan',
                                model: jurusanModel,
                                attributes: ['jurusan']
                            }]
                        }]
                    }
                ]
            });

            res.json(izins);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Siswa;