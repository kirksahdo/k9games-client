import Button from '../Button'
import MidiaMatch from '../MidiaMatch'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  button: {
    label: string
    onClick: () => void
  }
}

const Banner = ({ img, title, subtitle, button }: BannerProps) => (
  <div className="flex flex-col relative">
    <div
      className={`w-full h-[23rem] bg-cover bg-center md:h-[58rem]`}
      aria-label="Banner Image"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="w-full bg-darkGray flex flex-col gap-3 p-6 md:absolute md:bottom-0 md:right-0 md:bg-black/70">
      <div className="w-full flex-col">
        <h2
          className="text-white font-bold text-[20px] md:text-[28px]"
          aria-label="Banner Title"
        >
          {' '}
          {title}{' '}
        </h2>
        <p
          className="text-white font-normal text-[14px] md:text-[20px] [&>strong]:text-primary"
          aria-label="Banner SubTitle"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></p>
      </div>
      <MidiaMatch lessThan="md">
        <Button
          text={button.label}
          mode="primary"
          size="medium"
          onClick={button.onClick}
        />
      </MidiaMatch>
      <MidiaMatch greaterThan="md">
        <Button
          text={button.label}
          mode="primary"
          size="large"
          onClick={button.onClick}
        />
      </MidiaMatch>
    </div>
  </div>
)

export default Banner
