import React, {useContext} from "react"
import Image from '../components/Image'
import {getClass} from '../utils'
import {Context} from '../appContext'

export default function Photos() {
  const {allPhotos} = useContext(Context);
  const imageElements = allPhotos.map((photo, i) => {
    return(
      <Image key={photo.id} img={photo} className={getClass(i)} />
    )
  })

  return (
    <main className="photos">
      {imageElements}
    </main>
  )
}