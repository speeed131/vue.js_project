import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_BOOK } from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        books: [
            {
                isbn: '43223423',
                title: 'fwawafwae'
                price
            }
        ]
    },
    getters: {
        booksCount(state) {
            return state.books.length
        },
        getBookByPrice(state) {
            return price => {
                return state.books.filter(book => book.price < price)
            }
            /* return function (price) {
                return state.books.filter(function (book) {
                    book.price < price
                })
            }
            */
        }
    },
    mutations: {
        addBook(state, payload) {
            state.books.push(payload.book)
        }
    },
    actions: {
        // addAsync(context, payload) {
        //     setTimeout(function() {
        //         context.commit(ADD_BOOK, payload)
        //     }, 5000)
        // },
        addAsync({ commit }, payload) {
            setTimeout(function() {
                commit(ADD_BOOK, payload)
            }, 5000);
        }
    }
})