import mongoose from 'mongoose';


//adjunto con uri por si acaso
const URI = 'mongodb+srv://juandagv95:Ag2T6GJadpp7ipgD@cluster0.urmqf9c.mongodb.net/ecommerce';

const query = async () => {
    const result = await productModel.paginate({})
}

export const init = async () =>{
    try {
       await mongoose.connect(URI);
       console.log('Database connected sucssesfully'); 
    } catch (error) {
        console.error('Ah ocurrido un error al intentar conectarse a la base de datos', error.message);
    }
}
