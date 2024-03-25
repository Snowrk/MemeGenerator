import {Component} from 'react'
import {
  Input,
  Label,
  TopPara,
  BottomPara,
  CustomContainer,
  MainContainer,
  CustomButton,
  MemeContainer,
  Select,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    tText: '',
    bText: '',
    displayMeme: false,
    fSize: fontSizesOptionsList[0].optionId,
    fps: '',
  }

  updateImgUrl = event => this.setState({imgUrl: event.target.value})

  updateTtext = event => this.setState({tText: event.target.value})

  updateBtext = event => this.setState({bText: event.target.value})

  updateFsize = event => this.setState({fSize: event.target.value})

  // if (
  //       prevState.imgUrl.length > 0 &&
  //       prevState.tText.length > 0 &&
  //       prevState.bText.length > 0
  //     )

  generate = event => {
    event.preventDefault()
    this.setState(prevState => ({displayMeme: true, fps: prevState.fSize}))
  }

  render() {
    console.log(this.state)
    const {imgUrl, tText, bText, displayMeme, fSize, fps} = this.state
    return (
      <MainContainer>
        <CustomContainer>
          <h1>Meme Generator</h1>
          <form onSubmit={this.generate}>
            <Label htmlFor="img">Image URL</Label>
            <Input
              type="text"
              id="img"
              placeholder="Enter the image URL"
              value={imgUrl}
              onChange={this.updateImgUrl}
            />
            <Label htmlFor="top-text">Top Text</Label>
            <Input
              type="text"
              id="top-text"
              placeholder="Enter the Top text"
              value={tText}
              onChange={this.updateTtext}
            />
            <Label htmlFor="bottom-text">Bottom Text</Label>
            <Input
              type="text"
              id="bottom-text"
              placeholder="Enter the Bottom Text"
              value={bText}
              onChange={this.updateBtext}
            />
            <Label htmlFor="fS">Font Size</Label>
            <Select id="fS" onChange={this.updateFsize} value={fSize}>
              {fontSizesOptionsList.map(item => (
                <option value={item.optionId} key={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </Select>
            <CustomButton type="submit">Generate</CustomButton>
          </form>
        </CustomContainer>
        <CustomContainer>
          {displayMeme && (
            <MemeContainer data-testid="meme" dpy={displayMeme} url={imgUrl}>
              <TopPara fps={fps}>{tText}</TopPara>
              <BottomPara fps={fps}>{bText}</BottomPara>
            </MemeContainer>
          )}
        </CustomContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
