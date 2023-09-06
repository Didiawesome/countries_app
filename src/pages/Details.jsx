import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config'
import { Button } from '../components/Button'
import Info from '../components/Info'

const Details = () => {
  const navigate = useNavigate()
  const { name } = useParams()
  const [country, setCountry] = useState(null)

  console.log(country)

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
  }, [name])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info navigate={navigate} {...country} name={country.name.common} nativeName={country.name.nativeName} />}
    </div>
  )
}

export default Details
