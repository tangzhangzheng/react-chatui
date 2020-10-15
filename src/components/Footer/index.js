import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import PropTypes from 'prop-types'
import StyledFooter, { IconContainer, StyledPopoverContent } from './style'
import { ReactComponent as ClipIcon } from 'assets/icon/clip.svg'
import { ReactComponent as SmileIcon } from 'assets/icon/smile.svg'
import { ReactComponent as MicrophoneIcon } from 'assets/icon/microphone.svg'
import { ReactComponent as PlaneIcon } from 'assets/icon/plane.svg'
import { ReactComponent as OptionsIcon } from 'assets/icon/options.svg'
import Emoji from 'components/Emoji/index'
import Input from 'components/Input/index'
import Icon from 'components/Icon/index'
import Button from 'components/Button/index'
import Popover from 'components/Popover/index'

function Footer({ animeProps, children, ...rest }) {
  const [emojiIconActive, setEmojiActive] = useState(false);
  const theme = useTheme();
  return (
    <StyledFooter style={{ ...animeProps }} {...rest}>
      <Input
        placeholder="输入想和对方说的话"
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: "-25px" }}
              onVisible={() => setEmojiActive(true)}
              onHide={() => setEmojiActive(false)}
            >
              <Icon icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.gray3}
              />
            </Popover>
            <Icon icon={MicrophoneIcon} />
            <Button size="52px">
              <Icon
                icon={PlaneIcon}
                color="white"
                style={{ transform: 'translateX(-2px)' }}
              />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
  )
}

function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">🥰</Emoji>
      <Emoji label="smile">😀</Emoji>
      <Emoji label="todo">✔️</Emoji>
      <Emoji label="fire">🔥</Emoji>
      <Emoji label="Objects">💡</Emoji>
      <Emoji label="Laptop">💻</Emoji>
      <Emoji label="Pager">📟</Emoji>
      <Emoji label="Activity">⚽</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: "24px" }} />
    </StyledPopoverContent>
  )

}

Footer.propTypes = {
  children: PropTypes.any
}

export default Footer
export { PopoverContent }

