package com.example.messagingstompwebsocket;

public class HelloMessage {

	private Long id;

	private String name;

	private String title;

	private Long chatroom;

	public HelloMessage(Long id, String name, String title, Long chatroom) {
		this.id = id;
		this.name = name;
		this.title = title;
		this.chatroom = chatroom;
	}

	public Long getChatroom() {
		return chatroom;
	}

	public void setChatroom(Long chatroom) {
		this.chatroom = chatroom;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
