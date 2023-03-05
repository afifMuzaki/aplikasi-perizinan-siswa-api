const { request, response } = require("express");
const Transaksi = require("../models/transaksi");

class Petugas {
    async tampilSemuaIzin(req = request, res = response) {
        try {
            const izins = await Transaksi.findAll({
                attributes: ['izinId', 'guruNip', 'petugasNip', 'izin_guru', 'izin_petugas'],
            });

            res.json({
                message: 'Semua izin',
                data: izins
            });
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }

    async permintaanIzin(req = request, res = response) {
        try {
            const izins = await Transaksi.findAll({
                attributes: ['izinId', 'guruNip', 'petugasNip', 'izin_guru', 'izin_petugas'],
                where: {
                    petugasNip: null
                }
            });

            if(izins.length < 1) return res.json({ message: 'Tidak ada izin yang perlu disetujui' });

            res.json({
                message: 'Semua izin',
                data: izins
            });
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }

    async persetujuanIzin(req = request, res = response) {
        const { kredensial } = req;
        const idTrans = req.params.id;
        const { status } = req.body;

        try {
            await Transaksi.update({ petugasNip: kredensial, izin_petugas: status }, {
                where: {
                    id: idTrans
                }
            });

            res.json({message: 'Izin telah dikonfirmasi petugas'});
        } catch (err) {
            res.sendStatus(401);
            console.log(err);
        }
    }
}

module.exports = Petugas;