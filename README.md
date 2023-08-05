# Pit-A-Pet

## Pit A Pet Main Page
https://b2-o2.github.io/Pit-A-Pet/main.html
---
## 박진은 - main.html , main.css 작성
- main page 에서 수빈, 정민이 작성한 와이어 프레임 요소를 합쳐서 메인페이지의 테블릿 데트스탑 모바일 버전의 와이어 프레임 작성함

### trouble shooting 
- <span style="color:red"> trouble </span> : 모바일 버전을 제작하면서 중첩된 div 태그 구조에서, 자식 div에 margin-top을 주었는데, 부모 div에 margin-top이 적용되어 원하는 view 생성이 어려웠던 상황이 있었음.

- <span style="color:skyblue"> shooting </span> : 이러한 현상이 부모 블록에 테두리, 패딩 등이 없고 별도의 min-height, max-height 등이 설정되지 않은 경우, 자식의 margin-top은 부모의 margin-top으로 적용되는 margin collapse  현상임을 뒤늦게 인지하고 부모의 div에 padding 과 border 1px 를 주어서 해결할 수 있었습니다.




