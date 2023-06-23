import products from '../data.json'

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const headphones = products.filter(product => product.category === 'headphones')
   
    return NextResponse.json(headphones)
  }