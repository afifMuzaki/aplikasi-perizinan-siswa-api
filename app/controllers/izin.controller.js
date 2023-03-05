const { request, response } = require("express");
const db = require("../models");
const guruModel = db.Guru;
const mapelModel = db.Mapel;
const siswaModel = db.Siswa;

class Izin {
    async getAllGuru(req = request, res = response) {
        try {
            const gurus = await guruModel.findAll({
                attributes: ['nip', 'nama'],
            });
            res.json({guru: gurus});
        } catch (err) {
            console.log(err);
        }
    }

    async getAllMapel(req = request, res = response) {
        try {
            const mapels = await mapelModel.findAll({
                attributes: ['id', 'mapel'],
            });
            res.json({mapel: mapels});
        } catch (err) {
            console.log(err);
        }
    }

    async getSiswaIdentity(req = request, res = response) {
        const kredensial = req.kredensial;
        try {
            const identitas = await siswaModel.findAll({
                attributes: ['nama', 'kelasId'],
                where: {
                    nis: kredensial
                }
            });

            res.json({identitas});
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Izin;