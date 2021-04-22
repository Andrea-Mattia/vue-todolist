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
        editTodo: {
            visibility: false,
            text: '',
            index: null,
        },
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

        /**
         * Update todo completed status
         * @param {number} index array position of the todo items
         */
         updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        },

        /**
         * Update text
         */
         showEdit(index) {
            this.editTodo.text = this.todos[index].text;
            this.editTodo.index = index;
            this.editTodo.visibility = true;
        },

        updateTodo() {
            this.todos[this.editTodo.index].text = this.editTodo.text;

            this.closeEdit();
        },

        closeEdit() {
            this.editTodo.visibility = false;
            this.editTodo.text = '';
            this.editTodo.index = null;
        },
    },
});