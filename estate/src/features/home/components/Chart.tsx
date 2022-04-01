import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { dataChart } from '../data'

const Wrapper = styled.div`
  width: 700px;
  height: 620px;
  margin: 0 auto;
`

const TitleStyled = styled.h1`
  margin-top: 20px;
  line-height: 24px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const {
    cx, cy, midAngle, innerRadius, outerRadius,
    startAngle, endAngle, fill, payload, percent, value
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 40) * cos
  const sy = cy + (outerRadius + 40) * sin
  const mx = cx + (outerRadius + 70) * cos
  const my = cy + (outerRadius + 70) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

const Chart = () => {
  const [active, setActive] = useState<number>(0)
  const onPieEnter = (_: any, index: number) => {
    setActive(index as number)
  }
  return (
    <Wrapper>
      <TitleStyled>Popularity</TitleStyled>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={active}
            activeShape={renderActiveShape}
            data={dataChart}
            cx="50%"
            cy="50%"
            innerRadius={110}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

export default Chart
