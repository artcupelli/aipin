export class Disease {
    getAllDisease(){
        return (
            [
                {
                    name: 'Ferrugem Asiática',
                    damage: 'Perca significativa',
                    who: 'Fungo',
                    control: 'Uso de fungicida'
                },
                {
                    name: 'Mofo Branco',
                    damage: 'Morte da planta',
                    who: 'Fungo',
                    control: 'Rotação de culturas'
                },

                {
                    name: 'Podridão da Espiga',
                    damage: 'Apodrecimento',
                    who: 'Fungo',
                    control: 'Rotação de culturas'
                },
                {
                    name: 'Mancha Angular',
                    damage: 'Lesões no caule',
                    who: 'Bactéria',
                    control: 'Rotação de culturas'
                },
            ]
        )
    }
}