package com.example.messagingstompwebsocket;

public class Greeting {

	private Long id;

	private HelloMessage message;

	public Greeting() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Greeting(HelloMessage message) {
		this.message = message;
    }

    public HelloMessage getMessage() {
		return message;
	}

	public void setMessage(HelloMessage message) {
		this.message = message;
	}
}
