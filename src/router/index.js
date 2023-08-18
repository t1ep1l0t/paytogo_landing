import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaymentProcedureView from "@/views/PaymentProcedureView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import PublicOfertaView from "@/views/PublicOfertaView.vue";
import ReturnPolicyView from "@/views/ReturnPolicyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/payment-procedure',
      name: 'payment_procedure',
      component: PaymentProcedureView
    },
    {
      path: '/privacy-policy',
      name: 'privacy_policy',
      component: PrivacyPolicyView
    },
    {
      path: '/public-oferta',
      name: 'public_oferta',
      component: PublicOfertaView
    },
    {
      path: '/return-policy',
      name: 'return_policy',
      component: ReturnPolicyView
    },
  ]
})

export default router
