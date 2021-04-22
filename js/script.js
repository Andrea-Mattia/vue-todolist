/**
 * Descrizione:
 * Rifare l'esercizio della to do list (come fatto in precedenza con jQuery) ma questa
 * volta con Vue, un po come fatto assieme in classe:
 * - stampare in pagina un item per ogni elemento contenuto in un array di todo
 * - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto
 * invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
 * - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla
 * lista
 */

 const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Never gonna give you up',
                completed: false,
            },
            {
                text: 'Never gonna let you down',
                completed: false,
            },
            {
                text: 'Never gonna run around',
                completed: false,
            },
        ],
        newTodo: '',
    },
    methods: {
        /**
         * Insert a new todo in the list
         */
        addTodo() {

            if (this.newTodo !== '') {

                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },
        /**
         * Remove the todo from the list by index
         * @param {number} index array position of the todo items
         */
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
    },
});