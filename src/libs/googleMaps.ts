import axios from 'axios'

interface GoogleMapsApiResponse {
  results: {
    geometry: {
      location: {
        lat: number
        lng: number
      }
    }
  }[]
  status: string
}

export const getCityLocation = async (
  city: string,
): Promise<{
  latitude: number
  longitude: number
}> => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`

  try {
    const response = await axios.get<GoogleMapsApiResponse>(apiUrl)

    if (response.data.status === 'OK' && response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location
      return {
        latitude: location.lat,
        longitude: location.lng,
      }
    } else {
      throw new Error('Unable to retrieve location information')
    }
  } catch (error) {
    throw new Error('Error fetching data from Google Maps API')
  }
}