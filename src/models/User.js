const {Schema,model} = require('mongoose');

const accountSchema=Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String,
    }


},{
    timestamps:true,
    versionKey:false,
    collection:'Account'
}
);

accountSchema.method('toJSON', function() {
    const {_id,password,...object}=this.toObject();
    object.id=_id;
    return object;
});

module.exports =model('Account',accountSchema);
