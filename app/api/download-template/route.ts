import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Get the file path (renamed to remove spaces)
    const filePath = join(process.cwd(), 'public', 'abstract-template.doc');
    
    // Read the file
    const fileBuffer = readFileSync(filePath);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer);
    
    response.headers.set('Content-Type', 'application/msword');
    response.headers.set('Content-Disposition', 'attachment; filename="Abstract Template.doc"');
    response.headers.set('Cache-Control', 'no-cache');
    
    return response;
  } catch (error) {
    console.error('Error downloading file:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}