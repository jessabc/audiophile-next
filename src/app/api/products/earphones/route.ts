import products from '../data.json'
import { NextResponse } from 'next/server'

export async function GET() {
  const earphones = products.filter(product => product.category === 'earphones')
  
  return NextResponse.json(earphones)
}