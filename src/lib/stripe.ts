import { STRIPE_SECRET_KEY } from 'astro:env/server'
import Stripe from 'stripe'

const stripe = new Stripe(STRIPE_SECRET_KEY)

export { stripe }
