import products from '../data.json'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const speakers = products.filter(product => product.category === 'speakers')
   
    return NextResponse.json(speakers)
  }



