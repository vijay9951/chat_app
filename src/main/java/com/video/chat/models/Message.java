package com.video.chat.models;

import lombok.Data;

@Data
public class Message {
	
	private String name;
	private String content;
	
	public Message(String name, String content) {
		super();
		this.name = name;
		this.content = content;
	}

	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}
	 
		
	
}
