const {Schema,model} = require('mongoose');

const productSchema=Schema({
    codigoBarra:{
        type: String,
    },
    nombre:{
        type: String,
    },
    descripcion:{
        type: String,
    },
    precioVenta:{
        type: Number,
    },
    precioCompra:{
        type: Number,
    },
    fechaVencimiento:{
        type: Date,
    },
    fechaCompra:{
        type: Date,
        default: Date.now
    },
    categoria:{
        type: Mongoose.Schema.Types.ObjectId,
    }

},{
    timestamps:true,
    versionKey:false
}
);

module.exports =model('Product',productSchema);
