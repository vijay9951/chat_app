package com.video.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import com.github.sarxos.webcam.Webcam;
import com.github.sarxos.webcam.WebcamMotionDetector;
import com.github.sarxos.webcam.WebcamMotionEvent;
import com.github.sarxos.webcam.WebcamMotionListener;

@SpringBootApplication
public class VideoChatAppApplication implements WebcamMotionListener {
	
	public VideoChatAppApplication() {
		/*
		 * WebcamMotionDetector detector = new
		 * WebcamMotionDetector(Webcam.getDefault()); detector.setInterval(100); // one
		 * check per 100 ms detector.addMotionListener(this); detector.start();
		 */
    }
 
	
	  @Override public void motionDetected(WebcamMotionEvent wme) {
	//  System.out.println("Detected motion I, alarm turn on you have"); 
		  }
	 

	public static void main(String[] args) throws IOException {
		SpringApplication.run(VideoChatAppApplication.class, args);
		
		// new VideoChatAppApplication();
	      //  System.in.read(); // keep program open 
//		
//		Webcam webcam = Webcam.getDefault();
//		webcam.open();
//
//		// get image
//		BufferedImage image = webcam.getImage();
//
//		// save image to PNG file
//		ImageIO.write(image, "PNG", new File("test.png"));
//	}

}
	}
