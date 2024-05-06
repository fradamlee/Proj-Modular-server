const { Router } = require('express');

const router = Router();

router.put(
    '/sessions/:sesion_id/progress',
    (req, res) => {
        const sesion_id = req.params.sesion_id;
        const game_token = req.body.game_token;
        const island_id = req.body.island_id;
        const newELO = req.body.new_ELO;
        console.log('Conection established');
        res.status(200).json({
            message: `Saludos Fer, está es una respuesta del servidor, los datos que enviaste fueron: `,
            sesion_id,
            game_token,
            island_id
        });
    }
);

router.get(
    '/test',
    (req, res) => {
        res.status(200).json({message : "This is a test request"});
    }
)

module.exports = router;
