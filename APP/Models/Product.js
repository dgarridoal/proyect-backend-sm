const {Schema,model} = require('mongoose');

const productSchema=Schema({
    codigoBarra:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
    },
    precioVenta:{
        type: Number,
        required: true
    },
    precioCompra:{
        type: Number,
    },
    fechaVencimiento:{
        type: Date,
        required: true
    },
    fechaCompra:{
        type: Date,
        default: Date.now
    },
    categoria:{
        type: Schema.Types.ObjectId,
    }

},{
    timestamps:true,
    versionKey:false
}
);

module.exports =model('Product',productSchema);
