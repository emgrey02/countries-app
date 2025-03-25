import { CountryPage } from "@/app/components/CountryPage"

export default async function Page({
  params,
}: {
  params: Promise<{ countryName: string }>
}) {
    const { countryName } = await params;
    return <CountryPage countryName={countryName} />
}