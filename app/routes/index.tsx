import { PageProps } from '$fresh/server.ts'
import { Footer } from '@/components/Footer.tsx'
import { HeadElement } from '@/components/HeadElement.tsx'
import { Header } from '@/components/Header.tsx'
import ProductDetails from '@/islands/ProductDetails.tsx'
import { Handlers } from '$fresh/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? 'http://localhost:54321',
  Deno.env.get('SUPABASE_ANON_KEY') ?? 'oiwughfiowuhdoifwg'
)

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render()
  },
  async POST(req, ctx) {
    const form = await req.formData()
    const email = form.get('email')?.toString()
    console.log({ email })

    // Add email to list.
    const { data, error } = await supabase.rpc('update_claimed', {
      email_input: email,
    })
    console.log(data, error)

    // Redirect user to thank you page.
    const headers = new Headers()
    data
      ? headers.set('location', '/thanks')
      : headers.set('location', '/not-found')
    return new Response(null, {
      status: 303, // See Other
      headers,
    })
  },
}

const props = {
  description: 'General Availability!!!',
  image:
    'https://supabase.store/cdn/shop/files/GA-tshirt_940x.jpg?v=1713169790',
  title: 'GA Week Dark Mode Tee',
}

export default function ProductPage(ctx: PageProps) {
  const { url } = ctx

  return (
    <>
      <HeadElement {...props} url={url} />

      <Header />
      <ProductDetails {...props} />
      <Footer />
    </>
  )
}
