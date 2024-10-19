const app = Vue.createApp({
    data() {
        return {
            filaSenhas: [],
            ultimaSenhaComum: 0,
            ultimaSenhaEspecial: 0
        };
    },
    methods: {
        gerarSenhaComum() {
            this.ultimaSenhaComum++;
            const senhaComum = `C-${this.ultimaSenhaComum}`;
            this.filaSenhas.push(senhaComum);
        },
        gerarSenhaEspecial() {
            this.ultimaSenhaEspecial++;
            const senhaEspecial = `E-${this.ultimaSenhaEspecial}`;
            this.filaSenhas.push(senhaEspecial);
        },
        removerSenhaComum() {
            const index = this.filaSenhas.findIndex(senha => senha.startsWith('C-'));
            if (index !== -1) {
                this.filaSenhas.splice(index, 1);
            } else {
                alert('Não há senhas comuns na fila!');
            }
        },
        removerSenhaEspecial() {
            const index = this.filaSenhas.findIndex(senha => senha.startsWith('E-'));
            if (index !== -1) {
                this.filaSenhas.splice(index, 1);
            } else {
                alert('Não há senhas especiais na fila!');
            }
        }
    }
});

app.mount('#app');
