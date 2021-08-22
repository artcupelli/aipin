export class Pest {
    getAllPests(){
        return (
            [
                {
                    name: 'Pulgão',
                    damage: 'Seca dos galhos',
                    who: 'Pulgão',
                    control: 'Chuva e inimigos naturais'
                },
                {
                    name: 'Larva-minadora',
                    damage: 'Prejuízo na capacidade de fotossíntese',
                    who: 'Larva',
                    control: 'Controle biológico'
                },

                {
                    name: 'Mosca-branca',
                    damage: 'Seca dos galhos',
                    who: 'Mosca',
                    control: 'Uso de armadilhas'
                },

                {
                    name: 'Caruru-palmeri',
                    damage: 'Seca dos galhos',
                    who: 'Planta daninha prolífica',
                    control: 'Controle químico'
                },
            ]
        )
    }
}