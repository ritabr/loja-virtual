import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { CheckoutComponent } from './componentes/checkout/checkout.component';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { ProdutoComponent } from './componentes/produto/produto.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
