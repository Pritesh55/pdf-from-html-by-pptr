import Image from "next/image";
import MyFile from "./MyFile";


export default function Home() {
  return (
    <>
   
      {/* ---------------------------------------------------------- */}
      <Image key={imageURL} src={imageURL} width={1280} height={720} alt='image Upload' />

      <div className={styles.inputArea}>
        <input
          type="text"
          value={websiteURL}
          onChange={(e) => setWebsiteURL(e.target.value)}
          placeholder="Enter a website URL"
        />
        <button onClick={submitWebsiteURL}>Submit URL</button>
      </div>
      {/* ---------------------------------------------------------- */}


      <MyFile></MyFile>


    </>
  )
}
