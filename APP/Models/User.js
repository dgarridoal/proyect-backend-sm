const {Schema,model} = require('mongoose');

const accountSchema=Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    }

},{
    timestamps:true,
    versionKey:false
}
);

accountSchema.method('toJSON', function() {
    const {_id,...object}=this.toObject();
    object.uid=_id;
    return object;
});

module.exports =model('Account',accountSchema);
