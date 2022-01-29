const {sequelize,User} = require('./models');
async function main() {
    try{
        await sequelize.sync();
        await User.create({firstname:'Muhammad',lastname:'Zeeshan',email:'zeshan388@gmail.com'});
    }catch(error) {
        console.log(error);
    }

}main()