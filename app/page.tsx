import { redirect } from 'next/navigation'

export default function RootPage() {
  // El middleware manejará el redirect, pero por si acaso
  redirect('/es')
}
