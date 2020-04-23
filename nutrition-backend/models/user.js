const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const searchable = require('mongoose-regex-search');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        // minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 23,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    gender:{
        type:String,
enum:["Male","Female"],
default:"Male"
    },
    weight:{
        type: Number,
        default:70

    },
    height:{
        type: Number,
        default:170
    },
    activity_level:{
        type:String,
        enum:["very light","light","moderate","heavy","very heavy"],
        default:"moderate"

    },
    body_fat_level:{
type:Number,
default:12
    },
    goal:{
        type: String,
        enum:['decrease','maintain','increase'],
        default:'maintain'
        
    },
    Calories_per_day:{type: Number,default:2000},

    
    records:[{
        date:{
            type:String,
            
        },
        calories_left:{
            type:Number
        },
        calories_taken:{
            type:Number,
            default:0
        },
        protein_taken:{
            type:Number,
            default:0
        }, 
        foodlist:[{
            // Name:{
            //     type:String,
            // },
            // Calories:{
            //     type:Number
            // },
            // Protein:{
            //     type:Number
            // },
            // Carbs:{
            //     type:Number
            // },
        }]
        

    }],
    tokens: [{
        token: {
            type: String,
            required: false
        }
    }],
}, {
    timestamps: true
})



// userSchema.methods.toJSON = function () {
//     const user = this
//     const userObject = user.toObject()

//     delete userObject.password
//     delete userObject.tokens
//     delete userObject.avatar

//     return userObject
// }

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    console.log(password)
    console.log(user.password)
    bcrypt.compare(password, user.password, function(err, res) {
        if (err){
          // handle error
          throw new Error(err);
        }
        if (res)
        return user
        //  else {
        //   // response is OutgoingMessage object that server response http request
        //   throw new Error('passwords do not match');
        // }
      });
    
    // if (!isMatch) {
    //     throw new Error('Unable to login')
    // }

   // return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


//userSchema.plugin(searchable);

const User = mongoose.model('User', userSchema)

module.exports = User