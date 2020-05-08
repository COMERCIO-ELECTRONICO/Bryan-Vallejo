const EventEmiter = require('events')
class entrarALaCasa extends EventEmiter{
}
const EntrarCasa=new entrarALaCasa()
//evento que escucha
//One
entrarALaCasa.on('entrar por la puerta de adelante',(nombre)=>{
    console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`)
})
//evento que emite
//exit
entrarALaCasa.emit('entrar por la puerta de adelante','Bryan')