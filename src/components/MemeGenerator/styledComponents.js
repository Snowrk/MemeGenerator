// Style your components here
import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: black;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`
export const Select = styled.select`
  display: block;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MemeContainer = styled.div`
  padding: 1rem;
  color: white;
  background-image: url(${props => (props.dpy ? props.url : null)});
  background-size: cover;
  background-position: center;
  height: 260px;
  width: 350px;
  position: relative;
`

export const Para = styled.p`
  font-size: ${props => props.fps || 8}px;
  text-align: center;
  margin: 0;
`

export const TopPara = styled(Para)`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
`

export const BottomPara = styled(Para)`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
`

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  font-family: Open Sans;
`

export const CustomButton = styled.button`
width=50%;
max-width: 250px;
min-width: 120px;
border: none;
border-radius: 0.5rem;
padding: 0.7rem;
background-color: #0b69ff;
color: white;
font-family: Open Sans;
`
