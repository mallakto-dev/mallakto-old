const React = require("react")
const GlobalContextProvider = require("./src/components/context/GlobalContextProvider")

exports.wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      {element}
    </GlobalContextProvider>
  )
}