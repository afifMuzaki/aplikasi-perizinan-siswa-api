const { request, response } = require("express");
const db = require("../models");
const guruModel = db.Guru;
const mapelModel = db.Mapel;
const siswaModel = db.Siswa;
const kelasModel = db.Kelas;
const jurusanModel = db.Jurusan;
const kategoriModel = db.Kategori;

class Izin {
    async getAllGuru(req = request, res = response) {
        try {
            const gurus = await guruModel.findAll({
                attributes: ['nip', 'nama'],
            });
            res.json(gurus);
        } catch (err) {
            console.log(err);
        }
    }

    async getAllMapel(req = request, res = response) {
        try {
            const mapels = await mapelModel.findAll({
                attributes: ['id', 'mapel'],
            });
            res.json(mapels);
        } catch (err) {
            console.log(err);
        }
    }

    async getSiswaIdentity(req = request, res = response) {
        const kredensial = req.kredensial;
        try {
            const data = await siswaModel.findAll({
                attributes: ['nama', 'kelasId'],
                where: {
                    nis: kredensial
                }
            });

            const namaSiswa = data[0].nama;
            const kelasId = data[0].kelasId

            const dataKelas = await kelasModel.findAll({
                attributes: ['kelas', 'jurusanId', 'rombel'],
                where: {
                    id: kelasId
                }
            });

            const jurusanId = dataKelas[0].jurusanId;

            const dataJurusan = await jurusanModel.findAll({
                attributes: ['jurusan'],
                where: {
                    id: jurusanId
                }
            });

            const kelasSiswa = `${dataKelas[0].kelas} ${dataJurusan[0].jurusan} ${dataKelas[0].rombel}`

            res.json({namaSiswa, kelasSiswa});
        } catch (err) {
            console.log(err);
        }
    }   
    
    async getAllCategory(req = request, res = response) {
        try {
            const categories = await kategoriModel.findAll({
                attributes: ['id', 'kategori']
            });

            res.json(categories);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Izin;