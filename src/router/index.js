import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Evento from '@/pages/Evento';
import Login from '@/pages/Login';
import EventosHoje from '@/pages/EventosHoje';
import EventoAlteracao from '@/pages/EventoAlteracao'
import Cliente from '@/pages/Cliente'
import ClienteLista from '@/pages/ClienteLista'
import Produtos from '@/pages/Produtos'
import ProdutosLista from '@/pages/ProdutosLista'
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/',
    name: 'Calendar',
    component: Calendar,
  }, {
    path: '/cad-evento/:day',
    name: 'Eventos',
    component: Evento
  }, {
    path: '/eventos-dia',
    name: 'Eventos Hoje',
    component: EventosHoje
  }, {
    path: '/evento/Alteracao/:idEvento',
    name: 'Eventos Alteracao',
    component: EventoAlteracao
  }, {
    path: '/cliente/cadastro',
    name: 'Clientes',
    component: Cliente
  }, {
    path: '/cliente/lista',
    name: 'Clientes Lista',
    component: ClienteLista
  }, {
    path: '/produtos/lista',
    name: 'Produtos Lista',
    component: ProdutosLista
  }, {
    path: '/produtos/cadastro/:id',
    name: 'Produtos Cadastro',
    component: Produtos
  }],
  mode: "history"
});
