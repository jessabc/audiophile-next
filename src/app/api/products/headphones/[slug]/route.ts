import products from '../../data.json'

import { NextResponse } from 'next/server'
type Props = {
    params: {
        slug: string
    }
}
export async function GET(request: Request, {params: {slug}} : Props) {
   
    const thisProduct = products.find(product => product.slug === slug)

    return NextResponse.json(thisProduct)
  } 