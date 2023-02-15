const db = require('../models');
const siswa = db.Siswa;

class Siswa {
    async getSiswa(req, res) {
        try {
            const data = await siswa.findAll();
            res.json({
                status: "ok",
                message: "Data siswa berhasil didapat",
                data: data,
            });
        } catch (err) {
            res.json({
                message: "Data tidak ditemukan!",
                data: []
            });
            console.log(err);
        }
    };

    async addSiswa(req, res) {
        let {nis, nama, kls, username, password} = req.body;

        try {
            await siswa.create({
                nis: nis,
                nama: nama,
                kls: kls,
                username: username,
                password: password,
            });
            res.json({
                status: 'ok',
                message: 'Data berhasil ditambahkan!'
            })
        } catch (err) {
            res.json({
                message: 'Data gagal ditambahkan'
            });
            console.log(err);
        }
    }
}

module.exports = Siswa;