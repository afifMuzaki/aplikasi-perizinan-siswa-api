const { request, response } = require("express");
const db = require("../models");
const izinModel = db.Izin;

class Siswa {
    async entriIzin(req = request, res = response) {
        const { kredensial, username, role } = req;
        if (role != 'siswa') return res.sendStatus(403);

        const { nipGuru, idKategori, pelajaran, alasanIzin, waktuIzin, waktuKembali } = req.body;

        try {
            await izinModel.create({
                siswaNis: kredensial,
                guruNip: nipGuru,
                kategoriId: idKategori,
                mapel: pelajaran,
                alasan: alasanIzin,
                waktu_izin: waktuIzin,
                waktu_kembali: waktuKembali
            });

            res.send('Izin sedang diajukan, silahkan tunggu persetujuan');
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }

    getAllIzins(req = request, res = response) {
        izinModel.findAll({
            attributes: ['siswaNis', 'guruNip', 'kategoriId', 'mapel', 'alasan', 'waktu_izin', 'waktu_kembali', 'tggl']
        }).then(izins => {
            res.json({ message: 'Data Izin', data: izins });
        }).catch(err => {
            console.log(err);
        });
    }
}

module.exports = Siswa;