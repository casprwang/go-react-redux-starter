package server

import (
	"strconv"

	"github.com/gin-gonic/gin"
)

type Server struct {
	Engine *gin.Engine
	Port   int
}

func NewServer(port int) *Server {
	server := &Server{
		Engine: gin.Default(),
		Port:   port,
	}
	server.Engine.LoadHTMLGlob("server/templates/*")
	server.RegisterRoutes()
	return server
}

func (server *Server) Run() {
	server.Engine.Run(":" + strconv.Itoa(server.Port))
}
