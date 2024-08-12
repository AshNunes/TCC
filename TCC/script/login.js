document.getElementById('cpf').addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
});

document.getElementById('pass').addEventListener('input', function(p) {
    var value = p.target.value;
    var passPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    p.target.value = passPattern;
});

function login() {
    const vcpf = document.getElementById('cpf');
    const vpass = document.getElementById('pass');

    if (vcpf = "123.123.123-12" && vpass == "123456789") {
        window.location.href = "https://testedeimpressora.com/";
    } else {
        alert("cpf ou senha incorreta");
    }
}