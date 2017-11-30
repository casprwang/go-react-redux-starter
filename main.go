package main

import (
	"github.com/wangsongiam/go-react-redux-starter/server"
)

func main() {
	s := server.NewServer(8990)
	s.Run()
}
