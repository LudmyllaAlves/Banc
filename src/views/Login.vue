<template>
    <div>
        <Header></Header>
        <main>
            <div id="form">
                <fieldset>
                <h1 id="titulo">Login</h1><br>
                <form @submit.prevent="postLogin" id="inputform"  method="POST">
                    <label>Digite seu cpf/cnpj:</label><br>
                    <input type="text" id="cpfcnpj" name="cpfcnpj" v-model="form.cpfcnpj" required="required"><br>
                    <label>Digite sua senha:</label><br>
                    <input type="password" name="senha" id="senha" v-model="form.senha" required="required" ><br>   
                    <button type="submit">Login</button><br>
                </form>
                <p id="link"><a href="/cadastro">Cadastrar-se</a></p>
            </fieldset>
        </div>
    </main>
    <Footer></Footer>
    </div>
</template>

<script>
const axios = require('axios').default;
import "../css/forms.css";
import Footer from "../components/Footer";
import Header from "../components/Header"
export default{
    name:"Login",
    components:{
        Footer,
        Header
    },
    data(){
        return{
            form:{
                cpfcnpj: '',
                senha: ''
            },
        }
    },
    methods:{
    postLogin(){
        //console.log(this.form)
                let form = document.querySelector('#inputform');
                axios.post('http://localhost/banco/controler/login.php', form)
                .then(response => {
                alert(response.data)
                    //alert("Seja bem-vindo de volta")
                    if(response.data == "Logado"){
                        window.location.href='http://localhost:8080/home';
                    }else{
                        window.location.href='http://localhost:8080/'
                    }
                })
            },
    }
}
</script>