import { CountryPage } from "@/app/components/CountryPage"

export default function Page({ params }: { params: { countryName: string } }) {
  return <CountryPage countryName={params.countryName} />
}